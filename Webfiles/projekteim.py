import os
import json

path = "../Projects"
dir_list = os.listdir(path)
dir_list.pop()
fileNameHolder = {"FileNames": dir_list}
json_list = json.dumps(fileNameHolder, indent=2, ensure_ascii=False)
with open("projekteim.json", "w", encoding="utf8") as x: x.write(json_list)