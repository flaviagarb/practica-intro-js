// 3.1

const input = [
    "Downloads",
    "Videos",
    "capture",
    "mp4"
];

const transform = (list0) => {
    const pathList = list0.slice(0, list0.length - 1)

    const path = pathList.join("/")

    const ext = list0[list0.length - 1]

    const result = `${path}.${ext}`;

    return result
};

console.log(transform(input))


const input2 = [
    "CodinGame",
    "python",
    "py"
];

console.log(transform(input2))

const input3 = [
    "programing",
    "languages",
    "easy",
    "beginner",
    "useful",
    "pythonstuff",
    "py"
];

console.log(transform(input3))