import {
  ASSESSMENT_FOCUS_OPTIONS,
  INPUT_CLASS,
  INSTALLATION_PROJECT_OPTIONS,
  OPTION_CARD_CLASS,
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
      <div className="space-y-4">
        <div className="grid gap-2">
          <div className="text-sm font-medium text-[var(--pip-ink)]">
            What would you like the assessment to focus on?
          </div>

          <div className="grid gap-2 sm:grid-cols-2">
            {ASSESSMENT_FOCUS_OPTIONS.map((option) => (
              <label key={option} className={OPTION_CARD_CLASS}>
                <div className="flex items-start gap-2">
                  <input
                    className="mt-[2px]"
                    type="checkbox"
                    checked={form.assessmentFocus.includes(option)}
                    onChange={() =>
                      setForm((f) => ({
                        ...f,
                        assessmentFocus: toggleValue(f.assessmentFocus, option),
                      }))
                    }
                  />
                  <span>{option}</span>
                </div>
              </label>
            ))}
          </div>
        </div>

        <div className="grid gap-1">
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
      <div className="space-y-4">
        <div className="grid gap-2">
          <div className="text-sm font-medium text-[var(--pip-ink)]">
            What issue are you experiencing?
          </div>

          <div className="grid gap-2 sm:grid-cols-2">
            {TROUBLESHOOTING_ISSUE_OPTIONS.map((option) => (
              <label key={option} className={OPTION_CARD_CLASS}>
                <div className="flex items-start gap-2">
                  <input
                    className="mt-[2px]"
                    type="checkbox"
                    checked={form.troubleshootingIssueTypes.includes(option)}
                    onChange={() =>
                      setForm((f) => ({
                        ...f,
                        troubleshootingIssueTypes: toggleValue(
                          f.troubleshootingIssueTypes,
                          option
                        ),
                      }))
                    }
                  />
                  <span>{option}</span>
                </div>
              </label>
            ))}
          </div>
        </div>

        <div className="grid gap-1 sm:max-w-xs">
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

        <div className="grid gap-2 sm:grid-cols-2">
          {UPGRADE_GOAL_OPTIONS.map((option) => (
            <label key={option} className={OPTION_CARD_CLASS}>
              <div className="flex items-start gap-2">
                <input
                  className="mt-[2px]"
                  type="checkbox"
                  checked={form.upgradeGoals.includes(option)}
                  onChange={() =>
                    setForm((f) => ({
                      ...f,
                      upgradeGoals: toggleValue(f.upgradeGoals, option),
                    }))
                  }
                />
                <span>{option}</span>
              </div>
            </label>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="grid gap-2">
        <div className="text-sm font-medium text-[var(--pip-ink)]">
          What type of project is this?
        </div>

        <div className="grid gap-2 sm:grid-cols-2">
          {INSTALLATION_PROJECT_OPTIONS.map((option) => (
            <label key={option} className={OPTION_CARD_CLASS}>
              <div className="flex items-start gap-2">
                <input
                  className="mt-[2px]"
                  type="checkbox"
                  checked={form.installationProjectTypes.includes(option)}
                  onChange={() =>
                    setForm((f) => ({
                      ...f,
                      installationProjectTypes: toggleValue(
                        f.installationProjectTypes,
                        option
                      ),
                    }))
                  }
                />
                <span>{option}</span>
              </div>
            </label>
          ))}
        </div>
      </div>

      <div className="grid gap-1 sm:max-w-xs">
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
