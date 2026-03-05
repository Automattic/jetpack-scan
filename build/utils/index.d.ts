import { type ThreatFixStatus } from '../types/fixers.ts';
import { type Threat } from '../types/threats.ts';
export declare const getThreatType: (threat: Threat) => "core" | "file" | "plugins" | "themes";
export declare const fixerTimestampIsStale: (lastUpdatedTimestamp: string) => boolean;
export declare const fixerIsInError: (fixerStatus: ThreatFixStatus) => boolean;
export declare const fixerIsInProgress: (fixerStatus: ThreatFixStatus) => boolean;
export declare const fixerStatusIsStale: (fixerStatus: ThreatFixStatus) => boolean;
export declare const getFixerState: (fixerStatus: ThreatFixStatus) => {
    inProgress: boolean;
    error: boolean;
    stale: boolean;
};
export declare const getFixerAction: (threat: Threat) => import("@wordpress/i18n").TranslatableText<"Auto-fix"> | import("@wordpress/i18n").TranslatableText<"Delete"> | import("@wordpress/i18n").TranslatableText<"Replace"> | import("@wordpress/i18n").TranslatableText<"Update">;
export declare const getDetailedFixerAction: (threat: Threat) => import("@wordpress/i18n").TranslatableText<"Auto-fix"> | import("@wordpress/i18n").TranslatableText<"Delete file"> | import("@wordpress/i18n").TranslatableText<"Delete plugin from site"> | import("@wordpress/i18n").TranslatableText<"Delete theme from site"> | import("@wordpress/i18n").TranslatableText<"Replace default salts"> | import("@wordpress/i18n").TranslatableText<"Replace from backup"> | import("@wordpress/i18n").TranslatableText<"Update"> | import("@wordpress/i18n").TranslatableText<"Update plugin to newer version"> | import("@wordpress/i18n").TranslatableText<"Update theme to newer version">;
export declare const getFixerDescription: (threat: Threat) => string;
