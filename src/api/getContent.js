export const getContent = async () => {
    try {
        const res =  await fetch('/mock/api-test.json')
        return res
    } catch (error) {
        console.log(error)
    }
    
}