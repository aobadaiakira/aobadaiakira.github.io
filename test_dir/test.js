window.onload = function() {
  const blob = new Blob(["hello world."], {type: 'text/plain'});
  console.log(blob.size);
  console.log(blob.type);

  const a = document.getElementById('download');
  a.href = window.URL.createObjectURL(blob);

  const file_choose = document.getElementById("file_choose");

  const file_name    = document.getElementById("file_name");
  const file_content = document.getElementById("content");

  file_choose.addEventListener("change", (e) => {
    const input_file = e.target.files[0];
      
    file_name.textContent = input_file.name;
    const my_file = e.target.files[0];

    const reader = new FileReader();
    reader.onload = (e2) => {
      file_name.textContent = input_file.name;
      file_content.textContent = e2.target.result;
    }
    reader.readAsText(input_file);

  });  
}