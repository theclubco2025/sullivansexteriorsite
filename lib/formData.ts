export function parseOptionalUpload(v: FormDataEntryValue | null) {
  if (!v || typeof v === "string" || !v.name || v.size === 0) return null;
  return { filename: v.name, mimeType: v.type || "unknown", sizeBytes: v.size };
}
