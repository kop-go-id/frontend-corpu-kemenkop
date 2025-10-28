const Footer = () => {
    const startYear = 2025
    const currentYear = new Date().getFullYear()
    const yearDisplay = currentYear > startYear ? `${startYear} - ${currentYear}` : `${startYear}`
    return (
        <div className='bg-primary text-white text-center p-4 text-xs lg:text-base '>
            ©{yearDisplay} Kementerian Koperasi Republik Indonesia. Semua Hak Dilindungi.
        </div>
    )
}

export default Footer