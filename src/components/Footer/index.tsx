import dynamic from 'next/dynamic';
import type { SwapWidget as SwapWidgetType } from '@pangolindex/components';

const SwapWidget = dynamic(() => import('@pangolindex/components').then((module) => module.SwapWidget) as any, {
    ssr: false,
  }) as typeof SwapWidgetType;

export const Footer = () => {
    return (
        <header>
            <h1>FOOTER1</h1>
            {/* <div>
                <div style={{ marginTop: '10px', maxWidth: 400 }}>
                <SwapWidget isLimitOrderVisible={false} />
                </div>
            </div> */}
        </header>
    )
}