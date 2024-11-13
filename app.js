var deepestLeavesSum = function(root) {
    const [leaves, maxLevel] = fetchLevels(root, 1)
    let sum = 0
    for(let leave of leaves){
        if(leave.level === maxLevel) sum += leave.val
    }
    return sum
};

function fetchLevels(node, currentLevel){
    if(!node.left && !node.right) {
        return [[{val: node.val, level: currentLevel}], currentLevel]
    }

    let arr = []
    let maxLevel = -Infinity
    if(node.left){
        const [leaves, maxBranchLevel] = fetchLevels(node.left, currentLevel + 1)
        arr = arr.concat(leaves)
        if(maxBranchLevel > maxLevel) maxLevel = maxBranchLevel
    }

    if(node.right){
        const [leaves, maxBranchLevel] = fetchLevels(node.right, currentLevel + 1)
        arr = arr.concat(leaves)
        if(maxBranchLevel > maxLevel) maxLevel = maxBranchLevel
    }

    return [arr, maxLevel]
}