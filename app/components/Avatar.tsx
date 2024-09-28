interface AvatarProps {
    name: string
}

export default function Avatar({
    name
}: AvatarProps) {
    const firstLetter = name.charAt(0).toUpperCase()
    return(
        <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: '#3a2331',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '24px',
            fontWeight: 'bold',
            }}>
            {firstLetter}
        </div>
    )
}       