import type { Request, Response } from 'express';
import { createUser, getUserById , } from '../services/usuariosService.js';
import { RegisterUserDTO } from '../dtos/UsuariosDTO.js';
import { validate } from 'class-validator';

export const registerUser = async (req: Request, res: Response) => {
  const dto = Object.assign(new RegisterUserDTO(), req.body);
  const errors = await validate(dto);

  if (errors.length > 0) {
    return res.status(400).json(errors);
  }

  try {
    const uid = await createUser(dto.email, dto.password,dto.displayName);
    res.status(201).json({ uid });
  } catch (error) {
    res.status(500).json({ error: 'Error al registrar usuario' });
  }
};

export const getUserProfile = async (req: Request<{ uid: string }>, res: Response) => {
  const { uid } = req.params;

  if (!uid) return res.status(400).json({ error: 'UID requerido' });

  try {
    const user = await getUserById(uid);
    if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener perfil' });
  }
};



