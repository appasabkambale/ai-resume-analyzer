import { useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { formatSize } from "~/lib/utils";

interface FileUploaderProps {
    onFileSelect?: (file: File | null) => void;
}

const FileUploader = ({ onFileSelect }: FileUploaderProps) => {
    const onDrop = useCallback((acceptedFiles: File[]) => {
        const file = acceptedFiles[0] || null;
        onFileSelect?.(file);
    }, [onFileSelect]);

    const maxFileSize = 20 * 1024 * 1024;

    const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({
        onDrop,
        multiple: false,
        accept: { 'application/pdf': ['.pdf'] },
        maxSize: maxFileSize,
    })

    const file = acceptedFiles[0] || null;

    return (
        <div className="w-full gradient-border">
            <div {...getRootProps()} className="bg-surface-800 rounded-2xl">
                <input {...getInputProps()} />

                <div className="space-y-4 cursor-pointer p-6">
                    {file ? (
                        <div className="uploader-selected-file" onClick={(e) => e.stopPropagation()}>
                            <img src="/images/pdf.png" alt="pdf" className="size-10" />
                            <div className="flex items-center space-x-3">
                                <div>
                                    <p className="text-sm font-medium text-text-primary truncate max-w-xs">
                                        {file.name}
                                    </p>
                                    <p className="text-sm text-text-muted">
                                        {formatSize(file.size)}
                                    </p>
                                </div>
                            </div>
                            <button className="p-2 cursor-pointer hover:bg-surface-600 rounded-lg transition-colors" onClick={(e) => {
                                onFileSelect?.(null)
                            }}>
                                <img src="/icons/cross.svg" alt="remove" className="w-4 h-4 invert opacity-60" />
                            </button>
                        </div>
                    ) : (
                        <div className={`uplader-drag-area !bg-transparent !border-0 !min-h-0 ${isDragActive ? '!border-accent-violet/60' : ''}`}>
                            <div className="mx-auto w-16 h-16 flex items-center justify-center mb-4 rounded-2xl bg-surface-700/60">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="17 8 12 3 7 8" />
                                    <line x1="12" y1="3" x2="12" y2="15" />
                                </svg>
                            </div>
                            <p className="text-lg text-text-secondary">
                                <span className="font-semibold text-accent-violet">
                                    Click to upload
                                </span>{" "}or drag and drop
                            </p>
                            <p className="text-sm text-text-muted mt-1">PDF (max {formatSize(maxFileSize)})</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
export default FileUploader