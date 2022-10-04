Документация по языку "Сир скрипт"

1) initval value index - инициализирует значение value в ячейки под номером index

2) copy from_index to_index - копирует значение из ячейки from_index в to_index

3) consolein index - помещает значение ввода в ячейку index

4) consoleout index - выводит значение из ячейки index

5) goif if_index go_index - перемещает исполнение программы в go_index если в ячейки if_index истина

6) goto go_index - перемещает управление программы в go_index

7) incriment index - увеличитвает значение в ячейке index на 1

8) sumnums first_index second_index out_index - складывает значения из ячейки first_index и second_index и помещает результат в ячейку out_index

9) subnums first_index second_index out_index - вычитает значения из ячейки first_index и second_index и помещает результат в ячейку out_index

10) isless first_index second_index out_index - сравнивает значения из ячейки first_index и second_index на меньшее и помещает результат в ячейку out_index

11) islessequal first_index second_index out_index - isless с равенством

12) isequal first_index second_index out_index - сравнивает значения из ячейки first_index и second_index на равенство и помещает результат в ячейку out_index


Все значение в скрипте относительные: запись значений осуществляется после последней программной конструкции. Чтобы получит "буквальное" значение памяти (например для конструкции goto или goif) нужно использовать $index

