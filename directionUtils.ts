export class DirectionUtils {
    public static getDirectionFromDegrees(degrees : number) : number {
        let direction = degrees * 4 / 360; // split into 4 directions
        direction = (direction + 4) % 4; // Ensure it's 0-3
        return direction;
    }
}
