#code for jupyter to quickly edit questions
# -*- coding: utf-8 -*-
import json
from __future__ import unicode_literals
import codecs

f = open('pytania.json','r', encoding='utf-8')
data = json.load(f)
edited_data = []

for d in data:
  answers = []
  for t_q in d['pr_odpowiedz']:
    answers.append({
        'answer' : t_q,
        'correct' : True
    })
  for t_q in d['npr_odp']:
    answers.append({
        'answer' : t_q,
        'correct' : False
    })
  edited_data.append({
      'no' : d['nr'],
      'page' : d['strona'],
      'question' : d['pytanie'],
      'answers' : answers
                      })

with open("edited_questions.json", "w", encoding='utf-8') as json_file:
  json.dumps(edited_data, indent=4, ensure_ascii=False)

f.close()