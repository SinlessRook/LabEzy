
const dataDS = {
   'Module 1': [],
   'Module 2': [],
   'Module 3': [],
   'Module 4': [],
   'Module 5': [],
}

const dataOOP = {
   'Module 1': [],
   'Module 2': [],
   'Module 3': [],
   'Module 4': [],
   'Module 5': []
}

const contentArray = [];
const getData = async (module, subject) => {
   try {
      const response = await (await fetch(
         `https://api.github.com/repos/SinlessRook/Sem-3-${subject}-Lab/contents/Module%20${module}?ref=main`
      )).json();
      const arr = [];
      for (let i = 0; i < response.length; i++) {
         let name;
         name = response[i]['name'].split('.')[0];
         name = name.split('_').join(' ');
         arr.push({ 'name': name, 'filename': response[i]['name'], 'url': response[i]['url'] });
      }
      dataDS[`Module ${module}`] = arr;


   } catch (e) {
      console.log(e);
   }
};

const getContent = async (module, subject, name) => {

   const response = await (await fetch(`https://api.github.com/repos/SinlessRook/Sem-3-${subject}-Lab/contents/Module%20${module}/${name}?ref=main`)).json();
   const content = await response['content'];
   const decodedContent = atob(content);
   const AllData = await getAlgorithms(decodedContent);
   console.log(AllData);
   contentArray[0]=AllData;

}

const getRequiredContent = (file, data) => {
   for (let i = 0; i < data.length; i++) {
      if (data[i]['filename'] == file) {
         return data[i]['content'];
      }
   }
}

const getAlgorithms = async (data) => {
   // Assuming the 'data' parameter is structured text with algorithm, code, and output

   const algorithmStart = "//Algorithm";
   const codeStart = "//Code";
   const outputStart = "//Output";

   // Find the indices where each section starts
   const algorithmIndex = data.indexOf(algorithmStart);
   const codeIndex = data.indexOf(codeStart)+6;
   const outputIndex = data.indexOf(outputStart);

   // Extract the sections based on the start indices
   const algorithm =ConvertAlgorithm(await data.slice(algorithmIndex, codeIndex).trim());
   const code = data.slice(codeIndex, outputIndex).trim();
   const output = data.slice(outputIndex).trim();

   // Return an object containing the sections
   return {
      algorithm,
      code,
      output,
   };
};

const containsDigit = (char) => /\d/.test(char);

const ConvertAlgorithm = (algorithm) => {
    let algoArray = [];
    let tempString = '';

    // Split the algorithm by new lines and remove '//' and extra spaces
    let temp = algorithm.split('//').join('').trim().split('\n');

    for (let i = 1; i < temp.length; i++) {
        let currentLine = temp[i].trim();

        // Remove step number if it starts with a digit
        if (currentLine !== '' && containsDigit(currentLine[0])) {
            // If tempString is not empty, push it to the array
            if (tempString !== '') {
                algoArray.push(tempString.trim());
            }
            // Start a new tempString with the current line
            tempString = currentLine.replace(/^\d+\.\s*/, '').trim();
        } else {
            // Append currentLine to tempString
            tempString += ' ' + currentLine;
        }
    }

    // Push the final string if not empty
    if (tempString !== '') {
        algoArray.push(tempString.trim());
    }
    return algoArray;
};


export { getData, dataDS, dataOOP, getContent, contentArray,getAlgorithms,getRequiredContent };
