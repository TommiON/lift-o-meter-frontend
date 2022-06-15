const DecreaseUsingRollover = (value) => {
    if(value < 1 || value===null) {
        return 5
    } else {
        return value - 1
    }
}

export default DecreaseUsingRollover