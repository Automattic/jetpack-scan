import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import ThreatSeverityBadge from '../index.js';
describe('ThreatSeverityBadge', () => {
    it('renders the correct severity label', () => {
        render(_jsx(ThreatSeverityBadge, { severity: 4 }));
        expect(screen.getByText('High')).toBeInTheDocument();
    });
});
