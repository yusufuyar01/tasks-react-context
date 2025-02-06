# tasks-react-context
 React çalışmaları 5

PROJE HAKKINDA:  
 Daha önceden axios api kullanarak yaptığım react projesini propsları azaltarak context içerisine entegre ettim. useContext ve createContext kullanarak context mantığına göre yeniden şekillendirdim. Amaç görev listesi oluşturmaktır. Klavyeden girilen görevin başlığı ve görevin açıklamasını ekranda görevlerim altında listelenmektedir. Listelenen görevler silinebilmekte ve güncellenebilmektedir. useState kullanarak değişen değişkenlerin yeni değerlerini tanımladık. useEffect ve json server ile oluşturduğum db.json dosyasını kullanarak sayfa yenilendiğinde listelenen görevlerin kaybolmamasını engelledik. Güncelle ve silme butonlarına tıklandığında yapılan değişiklikler db.json dosyasında da değişmektedir. db.json dosyasının kullanımmında görevleri oluştururken post, ekrana listelemek için get, sil butonuna bastığında ilgili görevin silinmesi için delete, güncelle butonuna bastığında ilgili görevin güncellenmesi için put metotlarını kullandık. 
<br/>
<br/>
PROJENİN KURULUMU:  <br/>
Bu projenin bağımlılıkları `npm` ve `npx` kullanarak kolayca yüklenebilmektedir.

 Projeyi çalıştırmak aşağıdaki adımları izleyiniz:
 1) Porjeyi zip olarak indirin ya da klonlayın:
 https://github.com/yusufuyar01/tasks-react-context.git
 
2) Ardından proje klasörünü açın:
   cd tasks-react-context ya da  cd tasks-react-context-main
3) Gerekli bağımlılıkları yükleyin:<br/>
 npm install  #Bağımlılıkları indirir. <br/> 
 npm install axios  #Axios api bağlantı kurulumu yapar.<br/>
 npm install json-server  #db.json dosyasını kullanabilmek için json-serverı kurduk.<br/>
4) Yeni bir terminal açın ve 3001 portunda json-serverı çalıştırın:<br/>
 npx json-server src/api/db.json --port 3001 #json-serverı çalıştırır
5)  React projesini çalıştırın:<br/>
 npm start  #Projeyi başlatır.<br/>
 
 
<br/>

