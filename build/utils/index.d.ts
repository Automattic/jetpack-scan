import { type ThreatFixStatus } from '../types/fixers.ts';
import { type Threat } from '../types/threats.ts';
export declare const getThreatType: (threat: Threat) => "plugins" | "themes" | "core" | "file";
export declare const fixerTimestampIsStale: (lastUpdatedTimestamp: string) => boolean;
export declare const fixerIsInError: (fixerStatus: ThreatFixStatus) => boolean;
export declare const fixerIsInProgress: (fixerStatus: ThreatFixStatus) => boolean;
export declare const fixerStatusIsStale: (fixerStatus: ThreatFixStatus) => boolean;
export declare const getFixerState: (fixerStatus: ThreatFixStatus) => {
    inProgress: boolean;
    error: boolean;
    stale: boolean;
};
export declare const getFixerAction: (threat: Threat) => import("@wordpress/i18n/build-types/types.js").TranslatableText<"Delete"> | import("@wordpress/i18n/build-types/types.js").TranslatableText<"Update"> | import("@wordpress/i18n/build-types/types.js").TranslatableText<"Replace"> | import("@wordpress/i18n/build-types/types.js").TranslatableText<"Auto-fix">;
export declare const getDetailedFixerAction: (threat: Threat) => import("@wordpress/i18n/build-types/types.js").TranslatableText<"Update"> | import("@wordpress/i18n/build-types/types.js").TranslatableText<"Auto-fix"> | import("@wordpress/i18n/build-types/types.js").TranslatableText<"Delete file"> | import("@wordpress/i18n/build-types/types.js").TranslatableText<"Delete plugin from site"> | import("@wordpress/i18n/build-types/types.js").TranslatableText<"Delete theme from site"> | import("@wordpress/i18n/build-types/types.js").TranslatableText<"Update plugin to newer version"> | import("@wordpress/i18n/build-types/types.js").TranslatableText<"Update theme to newer version"> | import("@wordpress/i18n/build-types/types.js").TranslatableText<"Replace from backup"> | import("@wordpress/i18n/build-types/types.js").TranslatableText<"Replace default salts">;
export declare const getFixerDescription: (threat: Threat) => string;
