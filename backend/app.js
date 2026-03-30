import 'dotenv/config'; 
import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
});
const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.get('/status', (req, res) => {
  res.json({
    status: 'Running',
    timestamp: new Date().toISOString()
  });
});

app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users)
})

app.post('/users', async (req, res) => {
  const { name, email, age } = req.body;
  const newUser = await prisma.user.create({
    data: { name, email, age: parseInt(age) },
  });
  res.json({user: newUser, message: "ok"});
});

app.patch('/users/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email, age} = req.body;
  try {
    const updatedUser = await prisma.user.update({
      where: { 
        id: Number(id) 
      },
      data: { 
        name, 
        email,
        age 
      },
    });
    res.json({user: updatedUser, message: "ok"});
  } catch (error) {
    res.status(404).json({ error: "User not found" });
  }
});

app.put('/users/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;
  try {
    const updatedUser = await prisma.user.upsert({
    where: { id: Number(id) },
    update: { 
      name: name || null,
      email: email || null,
      age: age || null 
    },
    create: { 
      id: Number(id),
      name,
      email, 
      age
    },
  });
  res.json({user: updatedUser, message: "ok"});
  } catch (error) {
    res.status(404).json({ error: "User not found" });
  }
});

app.delete('/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await prisma.user.delete({
      where: {id: Number(id)}
    });
    res.json({user: deletedUser, message: "ok"})
  } catch (error) {
    res.status(404).json({ error: "User not found" });
  }
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));