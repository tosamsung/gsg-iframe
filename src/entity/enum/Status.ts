export enum StatusEnum {
    New = "new",
    Using = "using",
    Pending = "pending",
    Prepare = "prepare",
    Preparing = "preparing",
    Completed = "completed",
    In_progress = "in_progress",
    Canceled = "canceled"
}

export const StatusEnumDescriptions: Record<StatusEnum, string> = {
    [StatusEnum.New]: "Mới",
    [StatusEnum.Using]: "Đang sử dụng",
    [StatusEnum.Pending]: "Chờ xử lý",
    [StatusEnum.Prepare]: "Chuẩn bị",
    [StatusEnum.Preparing]: "Chuẩn bị",
    [StatusEnum.Completed]: "Hoàn thành",
    [StatusEnum.In_progress]: "Đang thực hiện",
    [StatusEnum.Canceled]: "Thất bại"
};

export const StatusEnumColors: Record<StatusEnum, string> = {
    [StatusEnum.New]: 'default',
    [StatusEnum.Using]: "blue",
    [StatusEnum.Pending]: 'gold',
    [StatusEnum.Preparing]: 'green',
    [StatusEnum.Prepare]: "green",
    [StatusEnum.Completed]: 'purple',
    [StatusEnum.In_progress]: 'blue',
    [StatusEnum.Canceled]: 'red'
};

function isStatusEnum(value: string): value is StatusEnum {
    return Object.values(StatusEnum).includes(value as StatusEnum);
}

export const getStatusEnumDescription = (phase: string): string => {
    if (isStatusEnum(phase)) {
        return StatusEnumDescriptions[phase];
    }
    throw new Error("Invalid Status");
};

export const getStatusEnumColor = (phase: StatusEnum): string => {
    return StatusEnumColors[phase];
};
