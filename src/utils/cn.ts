/**
 * クラス名を結合するユーティリティ関数
 */
export const cn = (...classes: (string | undefined | null | false)[]) => classes.filter(Boolean).join(' ');
