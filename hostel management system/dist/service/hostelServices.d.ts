import type { Rooms } from "../model/room.js";
import type { Resident } from "../model/residents.js";
export declare class hostelService {
    private rooms;
    private resident;
    constructor();
    localData(): void;
    get getRooms(): Rooms[];
    get getResidents(): Resident[];
    saveData(): void;
    addResident(name: string, age: number, phone: string, roomNumber: number, checkInDate: string): void;
}
//# sourceMappingURL=hostelServices.d.ts.map