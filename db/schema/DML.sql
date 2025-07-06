select * from inventario;

SELECT * FROM inventario ORDER BY id ASC LIMIT 3 OFFSET 0

SELECT * FROM inventario WHERE precio >= 1000 AND precio <= 10000 AND categoria like '%aros%' AND metal like '%plata%'