/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Param,
  Delete,
  Body,
} from '@nestjs/common';
import { AcessoPessoaService } from './acessopessoa.service';
import { AcessoPessoaDTO } from './acessopessoa.dto';

@Controller('acessopessoa')
export class AcessoPessoaController {
  constructor(private acessopessoaService: AcessoPessoaService) { }

  @Get()
  async findAll() {
    return this.acessopessoaService.findAll();
  }

  @Get(':idAcessoPessoa')
  async findOne(@Param('idAcessoPessoa') idAcessoPessoa: number) {
    return this.acessopessoaService.findOne(idAcessoPessoa);
  }

  @Get('getAcessos')
  async getAcessos() {
    return this.acessopessoaService.getAcessos();
  }

  //salvar entrada de uma pessoa
  @Post('entradapessoa')
  async entrada(@Body() acessopessoaDTO: AcessoPessoaDTO) {
    return this.acessopessoaService.entrada(acessopessoaDTO);
  }

  //salvar a saída de uma pessoa
  @Post('saidapessoa')
  async saida(@Body() acessopessoaDTO: AcessoPessoaDTO) {
    return this.acessopessoaService.saida(acessopessoaDTO);
  }

  @Delete(':idAcessoPessoa')
  async remove(@Param('idAcessoPessoa') idAcessoPessoa: number) {
    return this.acessopessoaService.remove(idAcessoPessoa);
  }
}