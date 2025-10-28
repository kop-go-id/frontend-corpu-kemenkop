'use client';

import { useState } from 'react';
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider } from 'antd';
import { useServerInsertedHTML } from 'next/navigation';

export default function AntdRegistry({ children, theme }) {
  const [cache] = useState(() => createCache());

  useServerInsertedHTML(() => {
    const styles = extractStyle(cache, true);
    return (
      <script
        dangerouslySetInnerHTML={{
          __html: `</script><style id="antd">${styles}</style><script>`,
        }}
      />
    );
  });

  return (
    <StyleProvider cache={cache}>
      <ConfigProvider theme={theme}>{children}</ConfigProvider>
    </StyleProvider>
  );
}
