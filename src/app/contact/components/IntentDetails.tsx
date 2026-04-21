import {
  ASSESSMENT_FOCUS_OPTIONS,
  INPUT_CLASS,
  INSTALLATION_PROJECT_OPTIONS,
  TROUBLESHOOTING_ISSUE_OPTIONS,
  UPGRADE_GOAL_OPTIONS,
  type DownNow,
  type Intent,
  type SpaceSize,
} from "../contactFormConfig";
import { toggleValue } from "../contactFormHelpers";

type FormState = {
  intent: Intent;
  assessmentFocus: string[];
  assessmentConcerns: string;
  troubleshootingIssueTypes: string[];
  troubleshootingDownNow: DownNow;
  upgradeGoals: string[];
  installationProjectTypes: string[];
  installationSpaceSize: SpaceSize;
};

function OptionList({
  options,
  selected,
  onToggle,
}: {
  options: readonly string[];
  selected: string[];
  onToggle: (value: string) => void;
}) {
  const tail = options.slice(-2);
  const main = options.slice(0, -2);

  return (
    <div className="space-y-2">
      <div className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
        {main.map((option) => (
          <label key={option} className="flex items-start gap-2 py-1 text-sm text-[var(--pip-ink)]/88">
            <input
              className="mt-[2px]"
              type="checkbox"
              checked={selected.includes(option)}
              onChange={() => onToggle(option)}
            />
            <span>{option}</span>
          </label>
        ))}
      </div>

      <div className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
        {tail.map((option) => (
          <label key={option} className="flex items-start gap-2 py-1 text-sm text-[var(--pip-ink)]/88">
            <input
              className="mt-[2px]"
              type="checkbox"
              checked={selected.includes(option)}
              onChange={() => onToggle(option)}
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default function IntentDetails({
  form,
  setForm,
}: {
  form: FormState;
  setForm: React.Dispatch<React.SetStateAction<FormState>>;
}) {
  if (form.intent === "general") return null;

  if (form.intent === "assessment") {
    return (
      <div className="space-y-5">
        <div className="grid gap-2">
          <div className="text-sm font-medium text-[var(--pip-ink)]">
            What would you like the assessment to focus on?
          </div>

          <OptionList
            options={ASSESSMENT_FOCUS_OPTIONS}
            selected={form.assessmentFocus}
            onToggle={(option) =>
              setForm((f) => ({
                ...f,
                assessmentFocus: toggleValue(f.assessmentFocus, option),
              }))
            }
          />
        </div>

        <div className="grid gap-1.5">
          <label className="text-sm font-medium text-[var(--pip-ink)]">
            What concerns prompted you to reach out?
          </label>
          <textarea
            className={`${INPUT_CLASS} min-h-[100px]`}
            value={form.assessmentConcerns}
            onChange={(e) =>
              setForm((f) => ({
                ...f,
                assessmentConcerns: e.target.value,
              }))
            }
          />
        </div>
      </div>
    );
  }

  if (form.intent === "troubleshooting") {
    return (
      <div className="space-y-5">
        <div className="grid gap-2">
          <div className="text-sm font-medium text-[var(--pip-ink)]">
            What issue are you experiencing?
          </div>

          <OptionList
            options={TROUBLESHOOTING_ISSUE_OPTIONS}
            selected={form.troubleshootingIssueTypes}
            onToggle={(option) =>
              setForm((f) => ({
                ...f,
                troubleshootingIssueTypes: toggleValue(
                  f.troubleshootingIssueTypes,
                  option
                ),
              }))
            }
          />
        </div>

        <div className="grid gap-1.5 sm:max-w-xs">
          <label className="text-sm font-medium text-[var(--pip-ink)]">
            Is anything down right now?
          </label>
          <select
            className={INPUT_CLASS}
            value={form.troubleshootingDownNow}
            onChange={(e) =>
              setForm((f) => ({
                ...f,
                troubleshootingDownNow: e.target.value as DownNow,
              }))
            }
          >
            <option value="">Select one</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="intermittent">Intermittent</option>
          </select>
        </div>
      </div>
    );
  }

  if (form.intent === "upgrade") {
    return (
      <div className="grid gap-2">
        <div className="text-sm font-medium text-[var(--pip-ink)]">
          What are you hoping to improve?
        </div>

        <OptionList
          options={UPGRADE_GOAL_OPTIONS}
          selected={form.upgradeGoals}
          onToggle={(option) =>
            setForm((f) => ({
              ...f,
              upgradeGoals: toggleValue(f.upgradeGoals, option),
            }))
          }
        />
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <div className="grid gap-2">
        <div className="text-sm font-medium text-[var(--pip-ink)]">
          What type of project is this?
        </div>

        <OptionList
          options={INSTALLATION_PROJECT_OPTIONS}
          selected={form.installationProjectTypes}
          onToggle={(option) =>
            setForm((f) => ({
              ...f,
              installationProjectTypes: toggleValue(
                f.installationProjectTypes,
                option
              ),
            }))
          }
        />
      </div>

      <div className="grid gap-1.5 sm:max-w-xs">
        <label className="text-sm font-medium text-[var(--pip-ink)]">
          Approximate size of the space
        </label>
        <select
          className={INPUT_CLASS}
          value={form.installationSpaceSize}
          onChange={(e) =>
            setForm((f) => ({
              ...f,
              installationSpaceSize: e.target.value as SpaceSize,
            }))
          }
        >
          <option value="">Select one</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
          <option value="not_sure">Not sure</option>
        </select>
      </div>
    </div>
  );
}
