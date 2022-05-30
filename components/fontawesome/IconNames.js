export const Ico = Object.freeze({
    "calendarDays":"calendar-days",
    "circlePlus":"circle-plus",
    "clockRotateLeft":"clock-rotate-left",
    "house":"house",
    "hourglass":"hourglass",
    "hourglassClock":"hourglass-clock",
    "hourglassEmpty":"hourglass-empty",
    "hourglassEnd":"hourglass-end",
    "hourglassStart":"hourglass-start",
    "list":"list",
    "plus":"plus",
    "rectangleHistory":"rectangle-history",
    "trash":"trash",
    "trashCan":"trash-can",
})

export function packIcon(name,icon){
    return {
        name:name,
        icon:icon
    }
}