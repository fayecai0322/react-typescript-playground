import { type ChangeEvent, type CSSProperties, useState } from 'react'

interface Day14Form {
  fullName: string
  email: string
  ticketType: string
  needParking: boolean
  dietaryNotes: string
}

const pageStyle: CSSProperties = {
  width: '100%',
  minHeight: '100svh',
  display: 'grid',
  placeItems: 'center',
  boxSizing: 'border-box',
  padding: '48px 20px',
  background: 'linear-gradient(135deg, #f8fbff 0%, #fff7ed 100%)',
}

const formStyle: CSSProperties = {
  width: 'min(100%, 520px)',
  display: 'grid',
  gap: 18,
  boxSizing: 'border-box',
  padding: 32,
  border: '1px solid #d8dee9',
  borderRadius: 8,
  background: '#ffffff',
  boxShadow: '0 24px 70px rgba(31, 41, 55, 0.12)',
  textAlign: 'left',
}

const labelStyle: CSSProperties = {
  display: 'grid',
  gap: 8,
  color: '#374151',
  fontSize: 15,
  fontWeight: 600,
}

const fieldStyle: CSSProperties = {
  width: '100%',
  boxSizing: 'border-box',
  border: '1px solid #cbd5e1',
  borderRadius: 6,
  padding: '11px 12px',
  color: '#111827',
  background: '#ffffff',
  font: 'inherit',
}

function App() {
  const [formData, setFormData] = useState<Day14Form>({
    fullName: '',
    email: '',
    ticketType: '',
    needParking: false,
    dietaryNotes: '',
  })

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target
    const fieldValue =
      event.target instanceof HTMLInputElement && event.target.type === 'checkbox'
        ? event.target.checked
        : value

    setFormData((previousFormData) => ({
      ...previousFormData,
      [name]: fieldValue,
    }))
  }

  return (
    <main style={pageStyle}>
      <form style={formStyle}>
        <div>
          <p
            style={{
              margin: 0,
              color: '#2563eb',
              fontSize: 14,
              fontWeight: 700,
              textTransform: 'uppercase',
            }}
          >
            Day 14
          </p>
          <h1
            style={{
              margin: '6px 0 0',
              color: '#111827',
              fontSize: 32,
              lineHeight: 1.15,
              letterSpacing: 0,
            }}
          >
            Event Registration
          </h1>
        </div>

        <label style={labelStyle}>
          Full name
          <input
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Ada Lovelace"
            style={fieldStyle}
          />
        </label>

        <label style={labelStyle}>
          Email
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="ada@example.com"
            style={fieldStyle}
          />
        </label>

        <label style={labelStyle}>
          Ticket type
          <select
            name="ticketType"
            value={formData.ticketType}
            onChange={handleChange}
            style={fieldStyle}
          >
            <option value="">Select a ticket</option>
            <option value="general">General admission</option>
            <option value="vip">VIP</option>
            <option value="student">Student</option>
          </select>
        </label>

        <label
          style={{
            ...labelStyle,
            gridTemplateColumns: 'auto 1fr',
            alignItems: 'center',
          }}
        >
          <input
            name="needParking"
            type="checkbox"
            checked={formData.needParking}
            onChange={handleChange}
            style={{ width: 18, height: 18 }}
          />
          Need parking
        </label>

        <label style={labelStyle}>
          Dietary notes
          <textarea
            name="dietaryNotes"
            value={formData.dietaryNotes}
            onChange={handleChange}
            placeholder="Optional"
            rows={4}
            style={{ ...fieldStyle, resize: 'vertical' }}
          />
        </label>

        <button
          type="button"
          style={{
            border: 0,
            borderRadius: 6,
            padding: '12px 16px',
            color: '#ffffff',
            background: '#2563eb',
            font: 'inherit',
            fontWeight: 700,
            cursor: 'pointer',
          }}
        >
          Register
        </button>
      </form>
    </main>
  )
}

export default App
