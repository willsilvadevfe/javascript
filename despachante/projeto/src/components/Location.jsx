const Location = () => {
  return (
    <iframe
      title="Localização da empresa"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d648.0541761875207!2d-45.897239227505935!3d-23.24497850487449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc4aaf128feb97%3A0x165e821b2f2c0f75!2sCRIS%20DESPACHANTE!5e0!3m2!1spt-BR!2sbr!4v1781697344370!5m2!1spt-BR!2sbr"
      width="100%"
      height="350"
      style={{
        border: 0,
        borderRadius: "20px",
        boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
      }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
};

export default Location;