import type { Metadata } from 'next'
import { metadata as editingMetadata } from './metadata'

export const metadata: Metadata = editingMetadata

export default function EditingLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
