import 'dart:convert';
import 'package:http/http.dart' as http;
import '../models/compra_model.dart';

class CompraService {
  final String apiUrl =
      'https://proyecto-flutter.onrender.com/api/compras'; // Cambia esta URL por la de tu API

  // Obtener todas las compras
  Future<List<Compra>> getCompras() async {
    final response = await http.get(Uri.parse(apiUrl));

    if (response.statusCode == 200) {
      List<dynamic> data = json.decode(response.body);
      return data.map((item) => Compra.fromJson(item)).toList();
    } else {
      throw Exception('Error al cargar las compras');
    }
  }

  // Obtener una compra por ID
  Future<Compra> getCompraById(String id) async {
    final response = await http.get(Uri.parse('$apiUrl/$id'));

    if (response.statusCode == 200) {
      return Compra.fromJson(json.decode(response.body));
    } else {
      throw Exception('Error al obtener la compra');
    }
  }

  // Crear una nueva compra
  Future<void> createCompra(Compra compra) async {
    final response = await http.post(
      Uri.parse(apiUrl),
      headers: {'Content-Type': 'application/json'},
      body: json.encode(compra.toJson()),
    );

    if (response.statusCode != 201) {
      throw Exception('Error al crear la compra');
    }
  }

  // Actualizar una compra
  Future<void> updateCompra(String id, Compra compra) async {
    final response = await http.put(
      Uri.parse('$apiUrl/$id'),
      headers: {'Content-Type': 'application/json'},
      body: json.encode(compra.toJson()),
    );

    if (response.statusCode != 200) {
      throw Exception('Error al actualizar la compra');
    }
  }

  // Eliminar una compra
  Future<void> deleteCompra(String id) async {
    final response = await http.delete(Uri.parse('$apiUrl/$id'));

    if (response.statusCode != 200) {
      throw Exception('Error al eliminar la compra');
    }
  }
}
