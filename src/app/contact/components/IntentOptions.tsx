import { INTENT_OPTIONS, OPTION_CARD_CLASS, type Intent } from "../contactFormConfig";

export default function IntentOptions({
  intent,
  onChange,
}: {
  intent: Intent;
  onChange: (intent: Intent) => void;
}) {
  return (
    <fieldset className="grid gap-3 lg:grid-cols-2">
      <legend className="sr-only">What can we help you with today?</legend>

      {INTENT_OPTIONS.map((option) => {
        const checked = intent === option.value;

        return (
          <label
            key={option.value}
            className={`${OPTION_CARD_CLASS} cursor-pointer ${
              checked ? "border-[var(--pip-ink)] ring-1 ring-[var(--pip-ink)]" : ""
            }`}
          >
            <div className="flex items-start gap-3">
              <input
                className="mt-1"
                type="radio"
                name="intent"
                checked={checked}
                onChange={() => onChange(option.value)}
              />
              <span className="font-medium">{option.label}</span>
            </div>
          </label>
        );
      })}
    </fieldset>
  );
}
