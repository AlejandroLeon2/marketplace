interface ImportMetaEnv {
    readonly STRIPE_SECRET_KEY: string;
}
interface ImportMeta {
    readonly env: ImportMetaEnv;
}