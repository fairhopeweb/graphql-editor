import { style } from 'typestyle';
import { themed } from '@/Theming/utils';

export const Editor = style({
  flex: 1,
});
export const CodeContainer = themed(
  ({ background: { mainFurthest, mainFar } }) =>
    style({
      flex: 1,
      overflowY: 'hidden',
      overflowX: 'hidden',
      display: 'flex',
      flexFlow: 'column',
      $nest: {
        '.monaco-scrollable-element': {
          padding: 8,
        },
        '.vs-dark .monaco-scrollable-element > .scrollbar': {
          background: mainFurthest,
          $nest: {
            '&.invisible': {
              opacity: 0.5,
            },
          },
        },
        '.vs-dark .monaco-scrollable-element > .scrollbar > .slider': {
          background: mainFar,
        },
        '.vs-dark .monaco-editor .char-delete, .vs-dark .monaco-editor .line-delete':
          {
            background: '#c12f1f39',
          },
        '.vs-dark .monaco-editor .char-insert, .vs-dark .monaco-editor .line-insert':
          {
            background: '#3d997340',
          },
      },
    }),
);

export const Generate = themed(({}) =>
  style({
    marginLeft: 'auto',
    padding: `2px 6px`,
    display: 'flex',
    alignItems: 'center',
  }),
);
