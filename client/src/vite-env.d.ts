/// <reference types="vite/client" />

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ViteTypeOptions {
	// By adding this line, you can make the type of ImportMetaEnv strict
	// to disallow unknown keys.
	// strictImportMetaEnv: unknown
}

interface ImportMetaEnv {
	readonly VITE_PORT: number;
	readonly VITE_SERVER_URL: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
