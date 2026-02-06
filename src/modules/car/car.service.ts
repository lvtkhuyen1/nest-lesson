import { HttpException, Injectable } from '@nestjs/common';
import { CARS } from './car.mock';

@Injectable()
export class CarService {
    private cars = CARS

    public async getCars() {
        return this.cars
    }

    public async postCar(car) {
        return this.cars.push(car)
    }

    public async getCarById(id: number): Promise<any> {
        const carId = String(id);
        return new Promise((resolve) => {
            const car = this.cars.find((car) => car.id === carId);
            if (!car) {
                throw new HttpException('Book does not exist!', 404);
            }
            return resolve(car);
        })
    }

    public async putCarById(id: number, property_name: string, propertyValue: string): Promise<any> {
        const carId = String(id);
        return new Promise((resolve) => {
            const index = this.cars.findIndex((car) => car.id === carId);
            if (index === -1) {
                throw new HttpException('Not Found', 404);
            }
            this.cars[index][property_name] = propertyValue;
            return resolve(this.cars[index]);
        })
    }

    public async deleteCarById(id: number): Promise<any> {
        const carId = String(id);
        return new Promise((resolve => {
            const index = this.cars.findIndex((car) => car.id === carId);
            if (index === -1) {
                throw new HttpException('Not Found', 404);
            }
            this.cars.splice(index, 1);
            return resolve(this.cars);
        }))
    }

}
