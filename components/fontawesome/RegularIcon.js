import {Ico, packIcon} from "./IconNames";
import {
    faCalendarDays,
    faCirclePlus,
    faClockRotateLeft,
    faPlus,
    faList,
    faHourglass,
    faHourglassClock,
    faHourglassEmpty,
    faHourglassEnd,
    faHourglassStart,
    faHouse,
    faRectangleHistory,
    faTrash,
    faTrashCan,
} from "@fortawesome/pro-regular-svg-icons";

const regularIcons = [
    packIcon(Ico.calendarDays,faCalendarDays),
    packIcon(Ico.circlePlus,faCirclePlus),
    packIcon(Ico.clockRotateLeft,faClockRotateLeft),
    packIcon(Ico.plus,faPlus),
    packIcon(Ico.list,faList),
    packIcon(Ico.hourglass,faHourglass),
    packIcon(Ico.hourglassClock,faHourglassClock),
    packIcon(Ico.hourglassEmpty,faHourglassEmpty),
    packIcon(Ico.hourglassEnd,faHourglassEnd),
    packIcon(Ico.hourglassStart,faHourglassStart),
    packIcon(Ico.house,faHouse),
    packIcon(Ico.rectangleHistory,faRectangleHistory),
    packIcon(Ico.trash,faTrash),
    packIcon(Ico.trashCan,faTrashCan),
]
export default regularIcons;
