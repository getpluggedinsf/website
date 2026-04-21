import { type PreferredContact } from "../contactFormConfig";

export default function PreferenceOptions({
  value,
  onChange,
}: {
  value: PreferredContact;
  onChange: (value: PreferredContact) => void;
}) {
  return (
    <fieldset className="grid gap-2">
      <legend className="text-sm font-medium text-[var(--pip-ink)]/82">
        Preferred contact method
      </legend>

      <div className="grid gap-x-5 gap-y-2 sm:grid-cols-3">
        <label className="flex items-center gap-2 text-sm text-[var(--pip-ink)]/88">
          <input
            type="radio"
            name="preferredContact"
            checked={value === "email"}
            onChange={() => onChange("email")}
          />
          Email
        </label>

        <label className="flex items-center gap-2 text-sm text-[var(--pip-ink)]/88">
          <input
            type="radio"
            name="preferredContact"
            checked={value === "phone"}
            onChange={() => onChange("phone")}
          />
          Phone
        </label>

        <label className="flex items-center gap-2 text-sm text-[var(--pip-ink)]/88">
          <input
            type="radio"
            name="preferredContact"
            checked={value === "either"}
            onChange={() => onChange("either")}
          />
          Either
        </label>
      </div>
    </fieldset>
  );
}
