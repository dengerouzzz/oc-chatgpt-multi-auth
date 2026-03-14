export const PERSIST_ACCOUNT_FOOTER_STYLES = [
	"label-masked-email",
	"full-email",
	"label-only",
] as const;

export type PersistAccountFooterStyle =
	(typeof PERSIST_ACCOUNT_FOOTER_STYLES)[number];
