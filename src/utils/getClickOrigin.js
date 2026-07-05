function getClickOrigin(id, myRef, onClick) {
    return () => {
        const rect = myRef.current.getBoundingClientRect()
        onClick({
            id: id,
            centerX: rect.left + rect.width / 2,
            centerY: rect.top + rect.height / 2,
        })
    }
}

export default getClickOrigin