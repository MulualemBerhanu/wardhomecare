import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useState, type FormEvent, type ReactNode } from 'react';
import { CONTACT } from '@/lib/brand';

const STEPS = ['Personal', 'Employment', 'Education', 'Experience', 'References', 'Certification'] as const;

const CERTIFICATION =
  'I certify that all statements made herein and on the enclosed resume (if provided) are true and accurate to the best of my knowledge. I authorize investigation of all statements herein recorded. I release from liability all persons and organizations reporting information required by this application. I understand that if hired I must prove that I am legally authorized to work in the United States.';

type YesNo = '' | 'yes' | 'no';
type Education = { school: string; subjects: string; degree: string };
type Job = { employer: string; position: string; dates: string; reason: string };
type Reference = { nameAddress: string; phone: string; relationship: string };

type Application = {
  date: string;
  lastName: string;
  firstName: string;
  middle: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  messagePhone: string;
  ssn: string;
  email: string;
  fax: string;
  position: string;
  employed: YesNo;
  employerName: string;
  employerAddress: string;
  howLong: string;
  reportDate: string;
  dismissed: YesNo;
  convicted: YesNo;
  abuse: YesNo;
  explain: string;
  schools: Education[];
  jobs: Job[];
  references: Reference[];
  skills: string;
  certify: boolean;
  signature: string;
  signatureDate: string;
};

const blankSchool = (): Education => ({ school: '', subjects: '', degree: '' });
const blankJob = (): Job => ({ employer: '', position: '', dates: '', reason: '' });
const blankReference = (): Reference => ({ nameAddress: '', phone: '', relationship: '' });

function today() {
  return new Date().toISOString().slice(0, 10);
}

function emptyApplication(): Application {
  const date = today();
  return {
    date,
    lastName: '',
    firstName: '',
    middle: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    messagePhone: '',
    ssn: '',
    email: '',
    fax: '',
    position: '',
    employed: '',
    employerName: '',
    employerAddress: '',
    howLong: '',
    reportDate: '',
    dismissed: '',
    convicted: '',
    abuse: '',
    explain: '',
    schools: [blankSchool()],
    jobs: [blankJob()],
    references: [blankReference()],
    skills: '',
    certify: false,
    signature: '',
    signatureDate: date,
  };
}

export function ApplicationForm() {
  const reduce = useReducedMotion() === true;
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<Application>(emptyApplication);
  const [error, setError] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'failed'>('idle');

  function patch(partial: Partial<Application>) {
    setForm((current) => ({ ...current, ...partial }));
    setError('');
  }

  function validate(index = step) {
    if (index === 0) {
      if (!form.lastName.trim() || !form.firstName.trim()) return 'Enter your last name and first name.';
      if (!form.address.trim() || !form.city.trim() || !form.state.trim() || !form.zip.trim()) return 'Enter your full address.';
      if (!form.phone.trim()) return 'Enter a phone number.';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) return 'Enter a valid email address.';
    }
    if (index === 1) {
      if (!form.position.trim()) return 'Enter the position you are applying for.';
      if (!form.employed) return 'Say whether you are currently employed.';
      if (form.employed === 'yes' && !form.employerName.trim()) return 'Enter your current employer’s name.';
      if (!form.dismissed || !form.convicted || !form.abuse) return 'Answer questions 3, 4, and 5.';
      if ((form.dismissed === 'yes' || form.convicted === 'yes' || form.abuse === 'yes') && !form.explain.trim()) {
        return 'Please explain your yes answer.';
      }
    }
    if (index === 5) {
      if (!form.certify) return 'Confirm the certification before you submit.';
      if (!form.signature.trim()) return 'Type your signature.';
      if (!form.signatureDate) return 'Enter the date.';
    }
    return '';
  }

  function goTo(next: number) {
    if (next > step) {
      for (let index = step; index < next; index += 1) {
        const problem = validate(index);
        if (problem) {
          setError(problem);
          setStep(index);
          return;
        }
      }
    }
    setError('');
    setStep(next);
  }

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    const problem = validate(5);
    if (problem) {
      setError(problem);
      return;
    }
    setStatus('sending');
    setError('');
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(CONTACT.email)}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `Employment application — ${form.firstName.trim()} ${form.lastName.trim()}`,
          _template: 'box',
          _captcha: 'false',
          name: `${form.firstName.trim()} ${form.lastName.trim()}`,
          email: form.email.trim(),
          message: formatApplication(form),
        }),
      });
      if (!response.ok) throw new Error('Mail service declined the application.');
      setStatus('sent');
    } catch {
      setStatus('failed');
      setError(`The application could not be sent. Email it to ${CONTACT.email} or call ${CONTACT.phones.cellPrimary}.`);
    }
  }

  if (status === 'sent') {
    return (
      <div className="border border-ink/15 bg-ivory px-6 py-12 text-ink sm:px-10" role="status">
        <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-moss">Application sent</p>
        <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight">Thank you, {form.firstName.trim()}.</h2>
        <p className="mt-4 max-w-xl text-base font-light leading-relaxed text-ink-soft">
          Your employment application was emailed to {CONTACT.email}. It is not saved on this website. If this is the first application the office receives this way, they may need to confirm the mailbox once before later applications arrive.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="border border-ink/15 bg-ivory text-ink">
      <div className="border-b border-ink/10 px-5 py-5 sm:px-8">
        <div className="flex items-end justify-between gap-4">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-moss">
            Step {step + 1} of {STEPS.length}
          </p>
          <p className="font-serif text-lg italic">{STEPS[step]}</p>
        </div>
        <div className="mt-4 h-px bg-ink/10">
          <div className="h-px bg-ink transition-all duration-500" style={{ width: `${((step + 1) / STEPS.length) * 100}%` }} />
        </div>
        <ol className="mt-4 flex flex-wrap gap-2">
          {STEPS.map((label, index) => (
            <li key={label}>
              <button
                type="button"
                onClick={() => goTo(index)}
                aria-current={index === step ? 'step' : undefined}
                className={`rounded-full px-3 py-1 font-sans text-[10px] font-medium uppercase tracking-[0.16em] ${
                  index === step ? 'bg-ink text-paper' : 'text-ink/55 hover:text-ink'
                }`}
              >
                {index + 1} {label}
              </button>
            </li>
          ))}
        </ol>
      </div>

      <div className="px-5 py-8 sm:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: reduce ? 0.15 : 0.35 }}
          >
            {step === 0 ? <Personal form={form} patch={patch} /> : null}
            {step === 1 ? <Employment form={form} patch={patch} /> : null}
            {step === 2 ? <EducationStep form={form} patch={patch} /> : null}
            {step === 3 ? <ExperienceStep form={form} patch={patch} /> : null}
            {step === 4 ? <ReferencesStep form={form} patch={patch} /> : null}
            {step === 5 ? <Certification form={form} patch={patch} /> : null}
          </motion.div>
        </AnimatePresence>
        {error ? (
          <p className="mt-6 text-sm text-clay" role="alert">
            {error}
          </p>
        ) : null}
      </div>

      <div className="flex items-center justify-between gap-4 border-t border-ink/10 px-5 py-5 sm:px-8">
        <button
          type="button"
          onClick={() => goTo(Math.max(0, step - 1))}
          disabled={step === 0 || status === 'sending'}
          className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-ink/60 disabled:opacity-30"
        >
          Back
        </button>
        {step < STEPS.length - 1 ? (
          <button
            type="button"
            onClick={() => goTo(step + 1)}
            className="rounded-full bg-ink px-8 py-3 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-paper transition-colors hover:bg-clay"
          >
            Continue
          </button>
        ) : (
          <button
            type="submit"
            disabled={status === 'sending'}
            className="rounded-full bg-ink px-8 py-3 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-paper transition-colors hover:bg-clay disabled:opacity-60"
          >
            {status === 'sending' ? 'Sending' : 'Submit application'}
          </button>
        )}
      </div>
    </form>
  );
}

function Personal({ form, patch }: { form: Application; patch: (partial: Partial<Application>) => void }) {
  return (
    <div className="grid gap-6">
      <Field label="Date" type="date" value={form.date} onChange={(date) => patch({ date })} required />
      <div className="grid gap-6 sm:grid-cols-3">
        <Field label="Last name" value={form.lastName} onChange={(lastName) => patch({ lastName })} required autoComplete="family-name" />
        <Field label="First name" value={form.firstName} onChange={(firstName) => patch({ firstName })} required autoComplete="given-name" />
        <Field label="Middle" value={form.middle} onChange={(middle) => patch({ middle })} autoComplete="additional-name" />
      </div>
      <Field label="Address" value={form.address} onChange={(address) => patch({ address })} required autoComplete="street-address" />
      <div className="grid gap-6 sm:grid-cols-3">
        <Field label="City" value={form.city} onChange={(city) => patch({ city })} required autoComplete="address-level2" />
        <Field label="State" value={form.state} onChange={(state) => patch({ state })} required autoComplete="address-level1" />
        <Field label="Zip" value={form.zip} onChange={(zip) => patch({ zip })} required autoComplete="postal-code" />
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Phone" type="tel" value={form.phone} onChange={(phone) => patch({ phone })} required autoComplete="tel" />
        <Field label="Message" type="tel" value={form.messagePhone} onChange={(messagePhone) => patch({ messagePhone })} />
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Email" type="email" value={form.email} onChange={(email) => patch({ email })} required autoComplete="email" />
        <Field label="Fax" type="tel" value={form.fax} onChange={(fax) => patch({ fax })} />
      </div>
      <Field
        label="Social Security #"
        value={form.ssn}
        onChange={(ssn) => patch({ ssn })}
        autoComplete="off"
        hint="This is emailed with the application and is not saved on the website."
      />
    </div>
  );
}

function Employment({ form, patch }: { form: Application; patch: (partial: Partial<Application>) => void }) {
  const needsExplanation = form.dismissed === 'yes' || form.convicted === 'yes' || form.abuse === 'yes';
  return (
    <div className="grid gap-8">
      <Field
        label="Position applied for"
        value={form.position}
        onChange={(position) => patch({ position })}
        required
        placeholder="Direct Support Professional"
      />
      <Choice
        label="Are you currently employed?"
        value={form.employed}
        onChange={(employed) => patch({ employed })}
      />
      {form.employed === 'yes' ? (
        <div className="grid gap-6 border-l border-ink/15 pl-5">
          <Field label="Employer’s name" value={form.employerName} onChange={(employerName) => patch({ employerName })} required />
          <Field label="Employer’s address" value={form.employerAddress} onChange={(employerAddress) => patch({ employerAddress })} />
          <Field label="How long have you worked for your current employer?" value={form.howLong} onChange={(howLong) => patch({ howLong })} />
        </div>
      ) : null}
      <Field label="If offered a position, when can you report for work?" type="date" value={form.reportDate} onChange={(reportDate) => patch({ reportDate })} />
      <Choice label="3. Have you ever been dismissed or asked to resign from a position?" value={form.dismissed} onChange={(dismissed) => patch({ dismissed })} />
      <Choice label="4. Have you ever been convicted of a crime?" value={form.convicted} onChange={(convicted) => patch({ convicted })} />
      <Choice label="5. Have you ever been founded or substantiated for a case of abuse?" value={form.abuse} onChange={(abuse) => patch({ abuse })} />
      {needsExplanation ? (
        <Area label="If yes to questions 3, 4, or 5, please explain" value={form.explain} onChange={(explain) => patch({ explain })} required />
      ) : null}
    </div>
  );
}

function EducationStep({ form, patch }: { form: Application; patch: (partial: Partial<Application>) => void }) {
  return (
    <Repeatable
      title="Please list all schools attended, and any pertinent information regarding your education."
      addLabel="Add a school"
      canAdd={form.schools.length < 6}
      onAdd={() => patch({ schools: [...form.schools, blankSchool()] })}
    >
      {form.schools.map((school, index) => (
        <Row key={index} onRemove={form.schools.length > 1 ? () => patch({ schools: form.schools.filter((_, i) => i !== index) }) : undefined}>
          <Field id={`school-${index}`} label="School" value={school.school} onChange={(value) => patch({ schools: replace(form.schools, index, { ...school, school: value }) })} />
          <Field id={`subjects-${index}`} label="Subjects studied" value={school.subjects} onChange={(value) => patch({ schools: replace(form.schools, index, { ...school, subjects: value }) })} />
          <Field id={`degree-${index}`} label="Degree or hours earned" value={school.degree} onChange={(value) => patch({ schools: replace(form.schools, index, { ...school, degree: value }) })} />
        </Row>
      ))}
    </Repeatable>
  );
}

function ExperienceStep({ form, patch }: { form: Application; patch: (partial: Partial<Application>) => void }) {
  return (
    <Repeatable
      title="List the most recent experience first. The paper application has room for six employers."
      addLabel="Add an employer"
      canAdd={form.jobs.length < 6}
      onAdd={() => patch({ jobs: [...form.jobs, blankJob()] })}
    >
      {form.jobs.map((job, index) => (
        <Row key={index} onRemove={form.jobs.length > 1 ? () => patch({ jobs: form.jobs.filter((_, i) => i !== index) }) : undefined}>
          <Field id={`employer-${index}`} label="Employer" value={job.employer} onChange={(value) => patch({ jobs: replace(form.jobs, index, { ...job, employer: value }) })} />
          <Field id={`job-position-${index}`} label="Position" value={job.position} onChange={(value) => patch({ jobs: replace(form.jobs, index, { ...job, position: value }) })} />
          <Field id={`dates-${index}`} label="Dates of employment" value={job.dates} onChange={(value) => patch({ jobs: replace(form.jobs, index, { ...job, dates: value }) })} />
          <Field id={`reason-${index}`} label="Reason for leaving" value={job.reason} onChange={(value) => patch({ jobs: replace(form.jobs, index, { ...job, reason: value }) })} />
        </Row>
      ))}
    </Repeatable>
  );
}

function ReferencesStep({ form, patch }: { form: Application; patch: (partial: Partial<Application>) => void }) {
  return (
    <div className="grid gap-10">
      <Repeatable
        title="References"
        addLabel="Add a reference"
        canAdd={form.references.length < 3}
        onAdd={() => patch({ references: [...form.references, blankReference()] })}
      >
        {form.references.map((reference, index) => (
          <Row key={index} onRemove={form.references.length > 1 ? () => patch({ references: form.references.filter((_, i) => i !== index) }) : undefined}>
            <Field id={`reference-name-${index}`} label="Name and address" value={reference.nameAddress} onChange={(value) => patch({ references: replace(form.references, index, { ...reference, nameAddress: value }) })} />
            <Field id={`reference-phone-${index}`} label="Phone" type="tel" value={reference.phone} onChange={(value) => patch({ references: replace(form.references, index, { ...reference, phone: value }) })} />
            <Field id={`reference-relationship-${index}`} label="Relationship" value={reference.relationship} onChange={(value) => patch({ references: replace(form.references, index, { ...reference, relationship: value }) })} />
          </Row>
        ))}
      </Repeatable>
      <Area
        label="Additional skills and training"
        hint="Example: Microsoft Word, First Aid / CPR"
        value={form.skills}
        onChange={(skills) => patch({ skills })}
      />
    </div>
  );
}

function Certification({ form, patch }: { form: Application; patch: (partial: Partial<Application>) => void }) {
  return (
    <div className="grid gap-6">
      <p className="text-base font-light leading-relaxed text-ink-soft">{CERTIFICATION}</p>
      <label className="flex items-start gap-3 text-sm font-light leading-relaxed">
        <input
          type="checkbox"
          checked={form.certify}
          onChange={(event) => patch({ certify: event.target.checked })}
          className="mt-1 h-4 w-4 accent-ink"
        />
        I have read this statement and I agree.
      </label>
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Signature" value={form.signature} onChange={(signature) => patch({ signature })} required placeholder="Type your full name" />
        <Field id="signature-date" label="Date" type="date" value={form.signatureDate} onChange={(signatureDate) => patch({ signatureDate })} required />
      </div>
      <p className="text-sm font-light leading-relaxed text-ink-soft">
        Submitting emails this application to {CONTACT.email}. Nothing is stored on this website.
      </p>
    </div>
  );
}

function Choice({ label, value, onChange }: { label: string; value: YesNo; onChange: (value: YesNo) => void }) {
  return (
    <fieldset>
      <legend className="font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-moss">{label}</legend>
      <div className="mt-3 flex gap-3">
        {(['yes', 'no'] as const).map((option) => (
          <button
            key={option}
            type="button"
            aria-pressed={value === option}
            aria-label={`${label}: ${option}`}
            onClick={() => onChange(option)}
            className={`min-w-24 rounded-full border px-5 py-2 font-sans text-[11px] font-medium uppercase tracking-[0.18em] ${
              value === option ? 'border-ink bg-ink text-paper' : 'border-ink/20 text-ink'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

function Repeatable({
  title,
  addLabel,
  canAdd,
  onAdd,
  children,
}: {
  title: string;
  addLabel: string;
  canAdd: boolean;
  onAdd: () => void;
  children: ReactNode;
}) {
  return (
    <div className="grid gap-6">
      <p className="text-base font-light leading-relaxed text-ink-soft">{title}</p>
      {children}
      {canAdd ? (
        <button type="button" onClick={onAdd} className="justify-self-start font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-ink">
          + {addLabel}
        </button>
      ) : null}
    </div>
  );
}

function Row({ children, onRemove }: { children: ReactNode; onRemove?: () => void }) {
  return (
    <div className="grid gap-5 border-t border-ink/10 pt-5">
      {children}
      {onRemove ? (
        <button type="button" onClick={onRemove} className="justify-self-start font-sans text-[11px] uppercase tracking-[0.16em] text-ink/50">
          Remove
        </button>
      ) : null}
    </div>
  );
}

function Field({
  id: idProp,
  label,
  value,
  onChange,
  type = 'text',
  required,
  autoComplete,
  placeholder,
  hint,
}: {
  id?: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
  hint?: string;
}) {
  const id = idProp ?? label.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  return (
    <label className="block" htmlFor={id}>
      <span className="font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-moss">
        {label}
        {required ? <span className="text-clay"> *</span> : null}
      </span>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 w-full border border-ink/15 bg-transparent px-4 py-3 text-base font-light text-ink outline-none transition-colors focus:border-ink"
      />
      {hint ? <span className="mt-2 block text-sm font-light text-ink-soft">{hint}</span> : null}
    </label>
  );
}

function Area({
  label,
  value,
  onChange,
  required,
  hint,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  hint?: string;
}) {
  const id = `${label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-area`;
  return (
    <label className="block" htmlFor={id}>
      <span className="font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-moss">
        {label}
        {required ? <span className="text-clay"> *</span> : null}
      </span>
      {hint ? <span className="mt-2 block text-sm font-light text-ink-soft">{hint}</span> : null}
      <textarea
        id={id}
        value={value}
        rows={4}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 w-full border border-ink/15 bg-transparent px-4 py-3 text-base font-light text-ink outline-none transition-colors focus:border-ink"
      />
    </label>
  );
}

function replace<T>(items: T[], index: number, next: T) {
  return items.map((item, i) => (i === index ? next : item));
}

function formatApplication(form: Application) {
  const yesNo = (value: YesNo) => (value === 'yes' ? 'Yes' : value === 'no' ? 'No' : '');
  const schools = form.schools.filter((item) => item.school || item.subjects || item.degree);
  const jobs = form.jobs.filter((item) => item.employer || item.position || item.dates || item.reason);
  const references = form.references.filter((item) => item.nameAddress || item.phone || item.relationship);
  return [
    'APPLICATION FOR EMPLOYMENT',
    `Date: ${form.date}`,
    '',
    'PERSONAL INFORMATION',
    `Last name: ${form.lastName}`,
    `First name: ${form.firstName}`,
    `Middle: ${form.middle}`,
    `Address: ${form.address}`,
    `City: ${form.city}`,
    `State: ${form.state}`,
    `Zip: ${form.zip}`,
    `Phone: ${form.phone}`,
    `Message: ${form.messagePhone}`,
    `Social Security #: ${form.ssn}`,
    `Email: ${form.email}`,
    `Fax: ${form.fax}`,
    '',
    'EMPLOYMENT INFORMATION',
    `Position applied for: ${form.position}`,
    `Currently employed: ${yesNo(form.employed)}`,
    form.employed === 'yes' ? `Employer’s name: ${form.employerName}` : '',
    form.employed === 'yes' ? `Employer’s address: ${form.employerAddress}` : '',
    form.employed === 'yes' ? `How long with current employer: ${form.howLong}` : '',
    `Report for work: ${form.reportDate}`,
    `Dismissed or asked to resign: ${yesNo(form.dismissed)}`,
    `Convicted of a crime: ${yesNo(form.convicted)}`,
    `Founded or substantiated for abuse: ${yesNo(form.abuse)}`,
    `Explanation: ${form.explain}`,
    '',
    'EDUCATION',
    ...schools.map((item, index) => `${index + 1}. ${item.school} | ${item.subjects} | ${item.degree}`),
    '',
    'EMPLOYMENT EXPERIENCE',
    ...jobs.map((item, index) => `${index + 1}. ${item.employer} | ${item.position} | ${item.dates} | ${item.reason}`),
    '',
    'REFERENCES',
    ...references.map((item, index) => `${index + 1}. ${item.nameAddress} | ${item.phone} | ${item.relationship}`),
    '',
    'ADDITIONAL SKILLS AND TRAINING',
    form.skills,
    '',
    'CERTIFICATION',
    CERTIFICATION,
    `Signature: ${form.signature}`,
    `Date: ${form.signatureDate}`,
  ]
    .filter((line) => line !== '')
    .join('\n');
}
