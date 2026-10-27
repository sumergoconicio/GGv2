/** Shared browser-file validation for file upload and message composition. */
export interface FileSelectionRejection {
    file: File;
    code: "accept" | "max_files" | "max_file_size";
    reason: string;
}
export declare const fileSelectionKey: (file: File) => string;
export declare function acceptsFile(file: File, accept?: string): boolean;
export declare function selectFiles(incoming: readonly File[], { files, accept, multiple, maxFiles, maxSize }: {
    files: readonly File[];
    accept?: string;
    multiple?: boolean;
    maxFiles?: number;
    maxSize?: number;
}): {
    accepted: File[];
    added: File[];
    rejected: FileSelectionRejection[];
};
