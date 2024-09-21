// ⚙️ docker-compose.yml file
version: "3"
services:
db:
image: postgres
restart: always
ports: - "5432:5432"
environment:
POSTGRES_PASSWORD: pass123

// ◾️ Terminal - Bring up our docker container
// \*\*Make sure DOCKER is Installed & Running 🔔 https://docs.docker.com/get-docker/
docker-compose up -d

// ◾ ️Terminal - Install typeorm and Postgres
npm install @nestjs/typeorm typeorm pg

// 📝 app.module.ts/
// adding TypeOrm configuration ⚙️
TypeOrmModule.forRoot({
type: 'postgres',
host: 'localhost',
port: 5432,
username: 'postgres',
password: 'pass123',
database: 'postgres',
autoLoadEntities: true,
synchronize: true,
}),

// ◾ ️Terminal - Start Nest in DEV mode
npm run start:dev

// 📝 coffee.entity
@Entity()
@ObjectType({ description: 'Coffee model' })
export class Coffee {
@PrimaryGeneratedField()
@Field(() => ID, { description: 'A unique identifier' })
id: number;

@Column()
name: string;

@Column()
brand: string;

@Column({ type: 'json' })
flavors: string[];
}

// 📝 CoffeesModule - add imports Array to register this Coffee Entity
imports: [TypeOrmModule.forFeature([Coffee])]
