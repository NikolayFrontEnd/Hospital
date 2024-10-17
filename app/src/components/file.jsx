const Profiles = () => {
    const [num, setNum] = useState(0);
    const [patients, setPatients] = useState([]);
    const [files, setFiles] = useState([]);
    const [selectedPatient, setSelectedPatient] = useState(null);
  
    // Получение списка пациентов
    useEffect(() => {
      axios.get('http://localhost:8000/recent_patients')
        .then(response => {
          const patientData = response.data.map(patient => ({
            name: patient.name, 
            city: patient.city,
            id: patient.id 
          }));
          setPatients(patientData);
          console.log('Данные с бэкенда:', patientData);
        })
        .catch(error => console.error('Ошибка при загрузке данных о пациентах', error));
    }, []);
  
    // Функция для перехода на страницу с файлами
    const ChangePage = (patient) => {
      axios.get(`http://localhost:8000/patient_files/${patient.id}`)
        .then(response => {
          setFiles(response.data);
          setSelectedPatient(patient);
          setNum(1);
        })
        .catch(error => console.error('Ошибка при загрузке PDF-файлов', error));
    };
  
    // Функция для скачивания выбранного PDF-файла
    const downloadPDF = (patientId, fileName) => {
      // Создаём динамическую ссылку для скачивания
      const link = document.createElement('a');
      link.href = `http://localhost:8000/download_pdf/${patientId}/${fileName}`;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  
    // Функция, срабатывающая при клике на название файла
    const handleFileClick = (file) => {
      downloadPDF(selectedPatient.id, file);
    };
  
    return (
      <>
        {num ? (
          <div className="bigBossContainer">
          {/*   <h2>{selectedPatient.name} - PDF Files</h2>    можно добавить и имя пациента, но я пока убрал. мне без имени больше нравится*/}
            
          <div className="container10">
              {files.map((file, index) => (
                <div key={index} className="card10">
               
                    <div className="content10">
                      <h2>{file}</h2>
                      <p>If you want, you can install this file:</p>
                      <button className="aaa" onClick={() => handleFileClick(file)}>INSTALL</button>
                    </div>
                  </div>
            
             ))}
         </div>    
          </div>
        ) : (
          <div className="con">
            {patients.map((patient, index) => (
              <div key={index} className="patient">
                <div className="avatar2">
                  <img src={Avatar} className="avatar-image" alt="Avatar" />
                </div>
                <div className="nameBlock">
                  <p className="NameP">{patient.name}</p>
                  <p className="Namep2">City: {patient.city}</p>
                </div>
                <div className="bottomBlock">
                  <FaUser className="Prof" />
                  <FaBriefcaseMedical className="cardss" onClick={() => ChangePage(patient)} />
                </div>
              </div>
            ))}
          </div>
        )}
      </>
    );
  };