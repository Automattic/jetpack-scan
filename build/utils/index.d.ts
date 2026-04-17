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
export declare const getFixerAction: (threat: Threat) => import("@wordpress/i18n").TransformedText<"Auto-fix"> | import("@wordpress/i18n").TransformedText<"Delete"> | import("@wordpress/i18n").TransformedText<"Replace"> | import("@wordpress/i18n").TransformedText<"Update">;
export declare const getDetailedFixerAction: (threat: Threat) => import("@wordpress/i18n").TransformedText<"Auto-fix"> | import("@wordpress/i18n").TransformedText<"Delete file"> | import("@wordpress/i18n").TransformedText<"Delete plugin from site"> | import("@wordpress/i18n").TransformedText<"Delete theme from site"> | import("@wordpress/i18n").TransformedText<"Replace default salts"> | import("@wordpress/i18n").TransformedText<"Replace from backup"> | import("@wordpress/i18n").TransformedText<"Update"> | import("@wordpress/i18n").TransformedText<"Update plugin to newer version"> | import("@wordpress/i18n").TransformedText<"Update theme to newer version">;
export declare const getFixerDescription: (threat: Threat) => import("@wordpress/i18n").TransformedText<"Delete the directory that the infected file is in."> | import("@wordpress/i18n").TransformedText<"Delete the infected file."> | import("@wordpress/i18n").TransformedText<"Delete the plugin directory to fix the threat."> | import("@wordpress/i18n").TransformedText<"Delete the theme directory to fix the threat."> | import("@wordpress/i18n").TransformedText<"Delete the unexpected file in a core WordPress directory."> | import("@wordpress/i18n").TransformedText<"Jetpack will auto-fix the threat."> | import("@wordpress/i18n").TransformedText<"Replace the default salt keys in wp-config.php with unique ones."> | import("@wordpress/i18n").TransformedText<"Replace the infected file with a previously backed up version that is clean."> | import("@wordpress/i18n").TransformedText<"Replace the modified core WordPress file with the original clean version from the WordPress source code."> | import("@wordpress/i18n").TransformedText<"Update %1$s to version %2$s"> | import("@wordpress/i18n").TransformedText<"Upgrade the plugin or theme to a newer version.">;
