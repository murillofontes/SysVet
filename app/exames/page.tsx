'use client'; // Adicione esta linha no início do arquivo
import Layout from '../fixLayout';
import React, { useState } from 'react';
import './exmestilo.css'; // Importar o CSS
import FloatingButton from '../FloatingButton';

interface Appointment {
  id?: number; // Adicione um ID para identificar os agendamentos
  petName: string;
  animalType: string;
  Gender: string;
  agePet: number;
  racaPet: string;
  nomeTutor: string;
  telefone: string;
  email: string;
  endereco: string;
  serviceType: string;
  obs: string;
  // Removido appointmentDate
}

const PetSchedule: React.FC = () => {
  const [petName, setPetName] = useState<string>('');
  const [animalType, setAnimalType] = useState<string>('cachorro');
  const [Gender, setGender] = useState<string>('macho');
  const [agePet, setAgePet] = useState<number>(0);
  const [racaPet, setRacaPet] = useState<string>('');
  const [nomeTutor, setNomeTutor] = useState<string>('');
  const [telefone, setTelefone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [endereco, setEndereco] = useState<string>('');
  const [serviceType, setServiceType] = useState<string>('consulta');
  const [obs, setObs] = useState<string>('');
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null); // ID do agendamento em edição

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (petName) {
      const newAppointment: Appointment = {
        id: editingId !== null ? editingId : Date.now(), // Gera um ID único para novos agendamentos
        petName,
        animalType,
        Gender,
        agePet,
        racaPet,
        nomeTutor,
        telefone,
        email,
        endereco,
        serviceType,
        obs,
        // Removido appointmentDate
      };

      if (editingId !== null) {
        // Atualiza o agendamento existente
        setAppointments(
          appointments.map((appointment) =>
            appointment.id === editingId ? newAppointment : appointment
          )
        );
      } else {
        // Adiciona um novo agendamento
        setAppointments([...appointments, newAppointment]);
      }

      // Reset form fields
      resetForm();
    }
  };

  const resetForm = () => {
    setPetName('');
    setAnimalType('cachorro');
    setGender('macho');
    setAgePet(0);
    setRacaPet('');
    setNomeTutor('');
    setTelefone('');
    setEmail('');
    setEndereco('');
    setServiceType('consulta');
    setObs('');
    setEditingId(null); // Reseta o ID de edição
  };

  const handleEdit = (appointment: Appointment) => {
    if (appointment.id !== undefined) { // Verifica se o id não é undefined
      setPetName(appointment.petName);
      setAnimalType(appointment.animalType);
      setGender(appointment.Gender);
      setAgePet(appointment.agePet);
      setRacaPet(appointment.racaPet);
      setNomeTutor(appointment.nomeTutor);
      setTelefone(appointment.telefone);
      setEmail(appointment.email);
      setEndereco(appointment.endereco);
      setServiceType(appointment.serviceType);
      setObs(appointment.obs);
      setEditingId(appointment.id); // Define o ID do agendamento em edição
    } else {
      console.error("Appointment ID is undefined.");
    }
  };

  const handleDelete = (id: number) => {
    setAppointments(appointments.filter((appointment) => appointment.id !== id));
  };

  return (
    <Layout>
      <div className="pet-schedule-container">
        <h1>Cadastre seu Pet!</h1>
        <form className="appointment-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="petName">Nome do Pet:</label>
            <input
              type="text"
              id="petName"
              value={petName}
              onChange={(e) => setPetName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="animalType">Tipo de Animal:</label>
            <select
              id="animalType"
              value={animalType}
              onChange={(e) => setAnimalType(e.target.value)}
            >
              <option value="Cachorro">Cachorro</option>
              <option value="Gato">Gato</option>
              <option value="Aves">Aves</option>
              <option value="Répteis">Répteis</option>
              <option value="Outro">Outro</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="Gender">Gênero:</label>
            <select
              id="Gender"
              value={Gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="Macho">Macho</option>
              <option value="Fêmea">Fêmea</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="agePet">Idade do Pet:</label>
            <input
              type="number"
              id="agePet"
              value={agePet}
              onChange={(e) => setAgePet(parseInt(e.target.value))}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="racaPet">Raça do Pet:</label>
            <input
              type="text"
              id="racaPet"
              value={racaPet}
              onChange={(e) => setRacaPet(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="nomeTutor">Nome do Tutor:</label>
            <input
              type="text"
              id="nomeTutor"
              value={nomeTutor}
              onChange={(e) => setNomeTutor(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="telefone">Telefone:</label>
            <input
              type="tel"
              id="telefone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="endereco">Endereço:</label>
            <input
              type="text"
              id="endereco"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="obs">Observações:</label>
            <textarea
              placeholder='Seu pet toma algum remédio?... Possui alguma deficiência?... Coloque alguma observação nesse campo!'
              id="obs"
              value={obs}
              onChange={(e) => setObs(e.target.value)}
            />
          </div>

          <button type="submit">SALVAR</button>
        </form>

        <h2>Pets Cadastrados:</h2>
        <ul className="appointment-list">
          {appointments.map((appointment) => (
            <li key={appointment.id}>
              <strong>Pet:</strong> {appointment.petName} {' '}
              <strong>Raça:</strong> {appointment.racaPet} {' '}
              <strong>Idade:</strong> {appointment.agePet} {' '}
              <strong>Tipo:</strong> {appointment.animalType} {' '}
              <strong>Genero:</strong> {appointment.Gender} {' '}
              <strong>Observações:</strong> {appointment.obs}
              <button onClick={() => handleEdit(appointment)}>Editar</button>
              <button onClick={() => handleDelete(appointment.id!)}>Excluir</button>
            </li>
          ))}
        </ul>
      </div>
      <FloatingButton><div></div></FloatingButton>
    </Layout>
  );
};

export default PetSchedule;
