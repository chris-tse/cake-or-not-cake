import { useState, useMemo } from 'react'

type FileUploadProps = {
    onImageParse: Function
}

export default function FileUpload({ onImageParse }: FileUploadProps) {
    const reader = useMemo(() => {
        const fr = new FileReader()

        fr.onload = e => {
            onImageParse(e.target.result)
        }

        return fr
    }, [])

    const onFileChange = event => {
        const target = event.target as HTMLInputElement
        reader.readAsDataURL(target.files[0])
    }

    return (
        <div>
            <form>
                <input type="file" name="image-upload" id="image-upload" onChange={onFileChange} />
            </form>
        </div>
    )
}
