import { OPTION_CARD_CLASS, type PreferredContact } from "../contactFormConfig";

export default function PreferenceOptions({
  value,
  onChange,
}: {
  value: PreferredContact;
  onChange: (value: PreferredContact) => void;
}) {
  return (
    <fieldset className="grid gap-2">
      <legend className="text-sm font-medium text-slate-700">
        Preferred contact method
      </legend>

      <div className="grid gap-2 sm:grid-cols-3">
        <label className={OPTION_CARD_CLASS}>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="preferredContact"
              checked={value === "email"}
              onChange={() => onChange("email")}
            />
            Email
          </div>
        </label>

        <label className={OPTION_CARD_CLASS}>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="preferredContact"
              checked={value === "phone"}
              onChange={() => onChange("phone")}
            />
            Phone
          </div>
        </label>

        <label className={OPTION_CARD_CLASS}>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="preferredContact"
              checked={value === "either"}
              onChange={() => onChange("either")}
            />
            Either
          </div>
        </label>
      </div>
    </fieldset>
  );
}
