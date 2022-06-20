import {DirectionUtils} from "./directionUtils";

export class MowerPosition {
    x: number;
    y: number;
    orientation: Orientation

    constructor(x: number, y: number, orientation: Orientation) {
        this.x = x;
        this.y = y;
        this.orientation = orientation;
    }

    toString() : string {
        return `${this.x} ${this.y} ${Orientation[this.orientation]}`
    }
}

export enum Orientation {
    N = 0, E = 1, S = 2, W = 3
}

export const OrientationToDegrees = {
    [Orientation.N]: 0,
    [Orientation.S]: 180,
    [Orientation.W]: 270,
    [Orientation.E]: 90
}

export class Mower {
    private _position: MowerPosition;

    get position(): MowerPosition {
        return this._position;
    }

    set position(position: MowerPosition) {
        this._position = new MowerPosition(position.x, position.y, position.orientation);
    }

    constructor(x: number, y: number) {
        this.position = {x, y, orientation: Orientation.N};
    }


    sendCommands(commands: string): MowerPosition {
        for (const command of commands) {
            let currentPosition = this.position;
            switch (command) {
                case 'L':
                case 'R':
                    this.position = this.rotate(currentPosition, command);
                    break;
                case 'M':
                    this.position = Mower.move(currentPosition);
                    break;
                default:
                    throw new Error('Not implemented');
            }
        }
        return this.position;
    }

    private static move(currentPosition: MowerPosition): MowerPosition {
        // determine from orientation if we increment or decrement the position
        const moveTo = currentPosition.orientation === Orientation.N || currentPosition.orientation === Orientation.E ? 1 : -1;

        // change position by orientation if new position is > 0
        switch (currentPosition.orientation) {
            case Orientation.N:
            case Orientation.S:
                if (currentPosition.y + moveTo >= 0) {
                    currentPosition.y += moveTo;
                }
                break;
            case Orientation.E:
            case Orientation.W:
                if (currentPosition.x + moveTo >= 0) {
                    currentPosition.x += moveTo;
                }
                break;
        }

        return currentPosition;
    }

    private rotate(currentPosition: MowerPosition, command: 'R' | 'L'): MowerPosition {
        // convert current orientation letter to degrees and determine if we increment or decrement the degrees
        const rotateTo = command === "R" ? OrientationToDegrees[this.position.orientation] + 90 : OrientationToDegrees[this.position.orientation] - 90;
        // convert degrees to orientation
        const orientation = DirectionUtils.getDirectionFromDegrees(rotateTo);

        currentPosition.orientation = Orientation[Orientation[orientation]];
        return currentPosition;
    }
}

